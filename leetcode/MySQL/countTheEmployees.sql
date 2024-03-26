/* Count the Employees
Table: COMPANY 
+-------------+---------+
|  Name     | Type    |
+-------------+---------+
| ID        | int    |
| NAME      | String |
| EMPLOYEES | int    |
+-------------+---------+
Question: Write a query to print the IDs of the companies that have more than 10,000 employees, in ascending order of ID 

Output Format: The result should contain the IDs of all the companies that have more than 10,000 employees, in ascending order in the 
*/

SELECT ID 
FROM COMPANY 
WHERE EMPLOYEES > 10000
ORDER BY ID ASC;