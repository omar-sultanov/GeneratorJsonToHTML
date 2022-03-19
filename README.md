## **Generator html file:**
Create a node-js server that processes the request, accepts data in json format, based on these data, it should generate an html file, the body tag of which is represented as a tree structure of elements in json (example of data in the data.json file)

----
### **Description of these elements:**

***name:*** name of the component, type string (the name of the element is responsible for how the element will look in html)

***settings:***  component settings, object type

***type:*** component type name, string type

***children:*** list of child components, type array of objects

----
### **Element types by name:**

***root-element*** - body tag content - settings.children

***section*** - section tag, with section class content - settings.children

***column*** - div tag, with class column, content - settings.children

***heading*** - h1 tag, with class heading, content - settings.text