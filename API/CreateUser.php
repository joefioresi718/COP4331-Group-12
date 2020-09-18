<?php

	$inData = getRequestInfo();

	$id = 0;
	$firstName = "";
	$lastName = "";
  $email = "";
  $username = "";
  $password = "";

	// connect to database
	$conn = new mysqli("crm-group12.com", "komilak_groupuser", "thisisthegroup", "komilak_COP4331");
	// check connection
	if ($conn->connect_error)
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
		// set variables from inData
    $firstName = $inData["firstName"];
    $lastName = $inData["lastName"];
    $email = $inData["email"];
    $username = $inData["username"];
    $password = $inData["password"];

		// put new user information in User table
		$sql = "INSERT INTO Users VALUES ($id, '$firstName', '$lastName', '$email', '$username', '$password')";
		$result = $conn->query($sql);
		$sql = "SELECT ID FROM Users where Username='$username'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		$id = $row["ID"];

		// sends back json with username, id, and success message
		returnWithInfo( $username, $password, $id );
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
	function returnWithInfo( $username, $password, $id )
	{
		$retValue = '{"username":"' . $username . '","password":"' . $password . '","id":"' . $id . '","error":"None","successfullyCreated":"true"}';
		sendResultInfoAsJson( $retValue );
	}

?>
