<?php

	//Search Contacts
	$inData = getRequestInfo();

	$searchResults = "[";
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
		$sql = "SELECT FirstName, LastName, Email, Phone, ID from Contacts where FirstName like '%" . $inData["search"] . "%' and UserID=" . $inData["ID"];
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
				// '{"searchResults":' . $searchResults . ',"searchCount":"' . $searchCount . '","error":"None"}'
				#        '{"searchResults":' . $searchResults . '}';
				$contactResults =  "[" . 
									' "' . $row["FirstName"] . '",' . 
									' "' . $row["LastName"] . '",' . 
									' "' . $row["Email"] . '",' . 
									' "' . $row["Phone"] . '",' . 
									' "' . $row["ID"] . '"' . 
		                            // '{"FirstName":' . '"' .  $row["FirstName"] . '"' . '},' . 
		                            // '{"LastName":' . '"' .  $row["LastName"] . '"' . '},' .
		                            // '{"Email":' . '"' .  $row["Email"] . '"' . '},' .
		                            // '{"Phone":' . '"' .  $row["Phone"] . '"' . '},' .
		                            // '{"ID":' . '"' .  $row["ID"] . '"' . '}' .
		                            "]";
		        //$contactResults =   '{ "FirstName":' . "\"" $row["FirstName"] . "\"" .  '}';
				$searchResults .= $contactResults;
			}
			$searchResults .= "]";
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
	function sendResultInfoAsJson( $obj)
	{
		header('Content-type: application/json');
		echo $obj;
	}

	// prints out error to json
	function returnWithError( $err )
	{
		$retValue = '{"firstName":"","lastName":"","error":"' . $err . '","successfullyCreated":"false"}';
		sendResultInfoAsJson( $retValue);
	}

	// prints out the id and names as json
	function returnWithInfo( $searchResults, $searchCount )
	{
	    //$retValue = "[";
		$retValue .= '{"searchResults":' . $searchResults . ' , "searchCount":"' . $searchCount . '","error":"None"}';
		//$retValue .= "]";
		sendResultInfoAsJson( $retValue);
	}

?>
