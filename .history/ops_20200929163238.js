var urlBase = 'http://crm-group12.com/API';
var extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

function doLogin()
{

	console.log("logging in!"); 

	userId = 0;
	firstName = "";
	lastName = "";
	
	var username = document.getElementById("loginUsername").value;
	var password = document.getElementById("loginPassword").value;

	var hash = md5(password);
	password = hash;
	
	document.getElementById("loginResult").innerHTML = "";

//	var jsonPayload = '{"login" : "' + login + '", "password" : "' + hash + '"}';
	var jsonPayload = '{"username" : "' + username + '", "password" : "' + password + '"}';
	var url = urlBase + '/Login.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.send(jsonPayload);

		var jsonObject = JSON.parse( xhr.responseText );

		userId = jsonObject.id;
		//console.log("user ID is " + userId);

		if( userId < 1 )
		{
			document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
			return;
		}

		firstName = jsonObject.firstName;
		lastName = jsonObject.lastName;

		saveCookie();
	
		window.location.href = "http://crm-group12.com/welcome.html";
	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;
	}

}

function doSignup()
{

	console.log("signing up!"); 

	firstName = "";
	lastName = "";
	username = "";
	password = ""; 
	email = "";
	
	var firstName = document.getElementById("signupFirstName").value;
	var lastName = document.getElementById("signupLastName").value;
	var username = document.getElementById("signupUsername").value;
	var email = document.getElementById("signupEmail").value;
	var password = document.getElementById("signupPassword").value;

	console.log("firstName: " + firstName);
	console.log("lastName: " + lastName);
	console.log("email: " + email);
	console.log("username: " + username);
	console.log("password: " + password);
	
	var hash = md5(password);
	password = hash;

	document.getElementById("signupResult").innerHTML = "";

//	var jsonPayload = '{"login" : "' + login + '", "password" : "' + hash + '"}';
	var jsonPayload = '{"firstName" : "' + firstName + '", "lastName" : "' + lastName + '", "email" : "' + email + '", "username" : "' + username + '", "password" : "' + password + '"}';
	var url = urlBase + '/CreateUser.' + extension;
	console.log(url);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.send(jsonPayload);
		
		var jsonObject = JSON.parse( xhr.responseText );
		
		userId = jsonObject.id;

		saveCookie();
	
		window.location.href = "welcome.html";
	}
	catch(err)
	{
		document.getElementById("signupResult").innerHTML = err.message;
	}

}

function saveCookie()
{
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
	console.log("successfuly saved cookie for: " + firstName + ", " + lastName + ", (" + userId + ")");
}

function readCookie()
{

	console.log("beginning the lovely process of reading cookies");
	userId = -1;
	var data = document.cookie;
	var splits = data.split(",");
	for(var i = 0; i < splits.length; i++) 
	{
		var thisOne = splits[i].trim();
		var tokens = thisOne.split("=");
		if( tokens[0] == "firstName" )
		{
			firstName = tokens[1];
		}
		else if( tokens[0] == "lastName" )
		{
			lastName = tokens[1];
		}
		else if( tokens[0] == "userId" )
		{
			userId = parseInt( tokens[1].trim() );
		}
	}

	console.log("the id we've found in the cookie is: " + userId);
	
	if( userId < 0 )
	{
		window.location.href = "index.html";
	}
	// else
	// {
	// 	document.getElementById("userName").innerHTML = "Logged in as " + firstName + " " + lastName;
	// }

	console.log("we've successfully read the cookie");
}

function doLogout()
{
	console.log("logging out!");
	userId = 0;
	firstName = "";
	lastName = "";
	document.cookie = "firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
	window.location.href = "index.html";
}

function addContact()
{
	firstName = "";
	lastName = "";
	email = "";
	phone = "";
	console.log("here we are now, entertain us");
	console.log("userId is:" + userId);
	var firstName = document.getElementById("firstNameContact").value;
	var lastName = document.getElementById("lastNameContact").value;
	var email = document.getElementById("emailContact").value;
	var phone = document.getElementById("phoneContact").value;
	// document.getElementById("contactAddResult").innerHTML = "";
	var jsonPayload = '{"firstName" : "' + firstName + '", "lastName" : "' + lastName + '", "email" : "' + email + '", "phone" : "' + phone + '", "ID" : "' + userId + '"}';
	var url = urlBase + '/CreateContact.' + extension;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				// document.getElementById("contactAddResult").innerHTML = "Contact has been added";
				console.log("added the contact!!! yay!!!");
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		console.log("didnt add the contact!! nayyyy :(");
		// document.getElementById("contactAddResult").innerHTML = err.message;
	}
	
}

function searchContact()
{
	var srch = document.getElementById("searchText").value;
	document.getElementById("contactSearchResult").innerHTML = "";
	
	var contactList = "";
	
	var jsonPayload = '{"search" : "' + srch + '","ID" : ' + userId + '}';
	var url = urlBase + '/SearchContacts.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				document.getElementById("contactSearchResult").innerHTML = "Contact(s) has been retrieved";
				document.getElementById("contactSearchResult").innerHTML = "Contact(s) has been retrieved";

				var jsonObject = JSON.parse( xhr.responseText );
				console.log(jsonObject);

				console.log("results: " + jsonObject.searchResults[0]);

				for( var i=0; i<jsonObject.searchResults.length; i++ )
				{
					// begin table
					contactList += "<tr>";

					// insert pos #
					contactList += "<th scope='row'>" + (i+1) + "</th>"

					// insert first name, last name, email, phone
					var jsonObject2 = JSON.parse(JSON.stringify(jsonObject.searchResults[i]));
					console.log("json2 = " + jsonObject2)
					var numProperties = 4;
					for( var j=0; j<numProperties; j++)
					{
						contactList += "<td>" + jsonObject2[j] + "</td>";
					}

					// edit button
					contactList += "<td>" + "<button class='btn btn-primary mr-sm-4 editContactOpen' type='button' id=" + jsonObject2[4] + ' data-id='" + jsonObject2[4] + "' data-toggle='modal' data-target='#mymodal2'>Edit</button>";

					
					// delete button 
					contactList += "<button class='btn btn-danger' type='button' onclick='deleteContact(" + jsonObject2[4] + "); searchContact();'>Delete</button>" + "</td>";

					// close table
					contactList += "</tr>";
				}
				
				
				//document.getElementsByTagName("p")[0].innerHTML = contactList;
				document.getElementsByTagName("tbody")[0].innerHTML = contactList;
				//loadTable();
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("contactSearchResult").innerHTML = err.message;
	}
	
}

function editContact(){

	var firstName = document.getElementById("firstNameEditContact").value;
	var lastName = document.getElementById("lastNameEditContact").value;
	var email = document.getElementById("emailEditContact").value;
	var phone = document.getElementById("phoneEditContact").value;
	var contactId = documents.getElementById("contactIdEditContact").value;

	var jsonPayload = '{"firstName" : "' + firstName + '", "lastName" : "' + lastName + '", "email" : "' + email + '", "phone" : "' + phone + '", "ID" : "' + contactId + '"}';
	var url = urlBase + '/UpdateContact.' + extension;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{

				console.log("updated the contact!!! yay!!!");
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		console.log("didnt update the contact!! nayyyy :(");
	}
}

function deleteContact(contactId){
	console.log("deleting contact with ID " + contactId);
	var jsonPayload = '{"ID" : ' + contactId + '}';
	var url = urlBase + '/DeleteContact.' + extension;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				console.log("deleted the contact!!! yay!!!");
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		console.log("didnt delete the contact!! nayyyy :(");
	}
}
