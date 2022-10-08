# employeeManagement

1. Login for admin. 

Using username with password form field.

2. Admin can add employees. Employees data fields will include Name, Mail ID, Contact Number, Department, Joining Date and Password

3. Admin and employee both can login with the same URL. After login both will see their respective dashboards. (Role based access)

4. After employee login, employee can add tasks (activities that they have done in the whole day including breaks, meetings and work) with start time and timeline taken to complete the task. 

For executing this activity, Create a button “Add Task”. On a click of it, a form will pop up and form will include the following fields:

Task Description (Text field)
Task Type (Dropdown) (i.e Break, meeting and work)
Start Time (Datetime) 
Time taken to complete the task in minutes. (Number)
5. Employee can add multiple tasks for a day. However, employees can add tasks for past and current dates only. 

6. On the Employee Dashboard – Show graphical information of employee tasks. 

Pie Chart – Create two pie charts, 1st for current day & 2nd for previous day. Pie chart will show the data for break, meeting & work.


Stacked Bar Chart with 3 bars –  
1st: Not Working. Include breaks
2nd: Working. Include work tasks
3rd: Meeting. Include meetings
The Stacked Bar will be shown as per the weekly data. 



7. On the Admin Dashboard – Admin can see a list of all employees. When admin clicks on any employee name, both graphs (i.e pie chart & stacked bar chart) will be visible.
