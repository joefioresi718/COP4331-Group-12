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
		$sql = "UPDATE Contacts SET FirstName='$firstName', LastName='$lastName', Email='$email', Phone='$phone' WHERE ID='$id'";
		$result = $conn->query($sql);
		if ( $conn->affected_rows > 0 )
		{
			returnWithInfo($firstName, $lastName, $email, $phone, $id);
		}
		else
		{
			$err = 'Could not find contact to update';
			returnWithError( $id, $err );
		}
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
	function returnWithError( $id, $err )
	{
		$retValue = '{"ID":"' . $id . '","error":"' . $err . '","successfullyUpdated":"false"}';
		sendResultInfoAsJson( $retValue );
	}

	// prints out the id and names as json
	function returnWithInfo( $firstName, $lastName, $email, $phone, $id )
	{
		$retValue = '{"firstName":"' . $firstName . '","lastName":"' . $lastName . '","email":"' . $email . '","phone":"' . $phone . '","ID":"' . $id . '","error":"None","successfullyUpdated":"true"}';
		sendResultInfoAsJson( $retValue );
	}

?>
