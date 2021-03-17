Homework
Task 1 
Code snippet:
1.	let arr = [1,2,3,4];  
To-do:
1)	Print the elements of arr in the console
2)	Create a new array arr2 with the values of arr doubled i.e [2,4,6,8]
3)	Create a new array arr3 containing only values from arr which are even i.e. [2,4]
Task 2
Code snippet:
1.	class Provider {  
2.	  /** 
3.	   * Gets the weather for a given city 
4.	   */  
5.	  static getWeather(city) {  
6.	    return Promise.resolve(`The weather of ${city} is Cloudy`)  
7.	  };  
8.	  /** 
9.	   * Gets the weather for a given city 
10.	   */  
11.	  static getLocalCurrency(city) {  
12.	    return Promise.resolve(`The local currency of ${city} is GBP`)  
13.	  };  
14.	  /** 
15.	   * Given Longtitude and latitude, this function returns a city 
16.	   */  
17.	  static findCity(long, lat) {  
18.	    return Promise.resolve(`London`)  
19.	  };  
20.	};  

To-do:
1)	Print the city for lat/long 51.5074 and 0.1278 in console
2)	Print the weather for lat/long 51.5074 and 0.1278
3)	Print the weather and currency for a given city (London)

Task 3
Look at this two-page app design:

![image](https://user-images.githubusercontent.com/16112731/111550950-14843a00-8777-11eb-847b-5b5c07732999.png)

 
You have 15 minutes to create a technical design to prepare this solution from the scratch. Some things you might consider:
•	What data do you need and how would you design the APIs?
•	How do you structure your UI components?
•	How would you structure your code?
•	How might SPA/React affect this?

Task 4

You have been tasked with creating a helper function that will be used to determine the output of an array of data.
Each element of the array has the following structure:

1.	{  
2.	    state: <String> // a state to go to  
3.	    errorCode: <String> // optional error code  
4.	}  
The states have different functions:
•	'processing' = delay by 2 seconds, then fetch the next state
•	'error' = handle the error code provided (see below)
•	'success' = return from the helper with the object: { title: 'Order complete' message: null }
Handling error codes:
•	'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
•	'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
•	null = return from the helper with an object: { title: 'Error page', message: null }
•	undefined = return from the helper with an object: { title: 'Error page', message: null }
Example usage:
 getProcessingPage([{ state: 'processing' }, { state: 'error' }])

This code should return after 2 seconds with the object: { title: 'Error page', message: null }
To-do:
•	Provide the code and a description of how to run it
Starting point:
1.	/** 
2.	 * Gets the processing page 
3.	 * @param {array} data  
4.	 */  
5.	function getProcessingPage(data) {  
6.	  
7.	}  

