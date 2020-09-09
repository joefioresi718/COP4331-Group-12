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
		// insert ID, names after login
    $firstName = $inData["firstName"];
    $lastName = $inData["lastName"];
    $email = $inData["email"];
    $username = $inData["login"];
    $password = $inData["password"];
		$sql = "INSERT INTO Users VALUES ($id, '$firstName', '$lastName', '$email', '$username', '$password')";
		$result = $conn->query($sql);
		// if ($result->num_rows > 0)
		// {
		// 	$row = $result->fetch_assoc();
		// 	$firstName = $row["FirstName"];
		// 	$lastName = $row["LastName"];
		// 	$id = $row["ID"];
    //
		// 	returnWithInfo($firstName, $lastName, $id );
		// }
		// else
		// {
		// 	returnWithError( "No Records Found" );
		// }

    // put user information in User table

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
		$retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}

	// prints out the id and names as json
	function returnWithInfo( $firstName, $lastName, $id )
	{
		$retValue = '{"id":' . $id . ',"firstName":"' . $firstName . '","lastName":"' . $lastName . '","error":""}';
		sendResultInfoAsJson( $retValue );
	}

?>
