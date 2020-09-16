<?php

	$inData = getRequestInfo();

	$id = 0;

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
		$id = $inData["ID"];
		$sql = "DELETE from Contacts where ID='$id'";
		$result = $conn->query($sql);
    if ( $conn->affected_rows > 0 )
    {
      returnWithInfo($id);
    }
    else
    {
      $err = 'Could not find contact';
      returnWithError($id, $err);
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
		$retValue = '{"ID":"' . $id . '", "error":"' . $err . '","successfullyDeleted":"false"}';
		sendResultInfoAsJson( $retValue );
	}

	// prints out the id and names as json
	function returnWithInfo( $id )
	{
		$retValue = '{"ID":"' . $id . '","error":"None","successfullyDelete":"true"}';
		sendResultInfoAsJson( $retValue );
	}

?>
