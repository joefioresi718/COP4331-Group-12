<?php

	$inData = getRequestInfo();

	$id = 0;
	$firstName = "";
	$lastName = "";
  $email = "";
  $phone = 0;

	// connect to database
	$conn = new mysqli("crm-group12.com", "komilak_groupuser", "thisisthegroup", "komilak_COP4331");
	// check connection
	if ($conn->connect_error)
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
		// insert ID, names after login
		$firstName = $inData["firstName"];
		$lastName = $inData["lastName"];
		$email = $inData["email"];
		$phone = $inData["phone"];
		$id = $inData["ID"];
		$date = date('Y-m-d');
		$sql = "INSERT INTO Contacts VALUES (0, '$firstName', '$lastName', '$email', '$phone', '$date','$id')";
		$result = $conn->query($sql);
		returnWithInfo($firstName, $lastName, $date);
		$conn->close();
	}

	// Get username and password
	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	// prints out json object
	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}

	// prints out error to json
	function returnWithError( $err )
	{
		$retValue = '{"firstName":"","lastName":"","error":"' . $err . '","successfullyCreated":"false"}';
		sendResultInfoAsJson( $retValue );
	}

	// prints out the id and names as json
	function returnWithInfo( $firstName, $lastName, $date )
	{
		$retValue = '{"firstName":"' . $firstName . '","lastName":"' . $lastName . '","date":"' . $date . '","error":"None","successfullyCreated":"true"}';
		sendResultInfoAsJson( $retValue );
	}

?>
