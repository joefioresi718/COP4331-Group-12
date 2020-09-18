<?php

	//Search Contacts
	$inData = getRequestInfo();

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
		$sql = "SELECT FirstName from Contacts where FirstName like '%" . $inData["search"] . "%' and UserID=" . $inData["ID"];
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
				$searchResults .= '"' . $row["FirstName"] . '"';
			}
			returnWithInfo( $searchResults, $searchCount );
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
	function returnWithInfo( $searchResults, $searchCount )
	{
		$retValue = '{"searchResults":' . $searchResults . ',"searchCount":"' . $searchCount . '","error":"None"}';
		sendResultInfoAsJson( $retValue );
	}

?>