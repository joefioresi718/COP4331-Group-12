<?php
	//Search Contacts
	$inData = getRequestInfo();
	
	$id = 0;
	$firstName = "";
	$lastName = "";
	$searchResults = "";
	$searchCount = 0;

	// connect to database
	$conn = new mysqli("crm-group12.com", "komilak_groupuser", "thisisthegroup", "komilak_COP4331");
	// check connection
	if ($conn->connect_error)
	{
		returnWithError( $conn->connect_error );
	}
	else
	{
		$sql = "select Name from Contacts where Name like '%" . $inData["search"] . "%' and UserID=" . $inData["userId"];
		$result = $conn->query($sql);
		if ($result->num_rows > 0)
		{
			while($row = $result->fetch_assoc())
			{
				if( $searchCount > 0 )
				{
					$searchResults .= ",";
				}
				$searchCount++;
				$searchResults .= '"' . $row["Name"] . '"';
			}
		}
		else
		{
			returnWithError( "No Records Found" );
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