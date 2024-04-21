# What are services in angular?

In Angular, a service is a class that provides functionality and features to multiple parts of your application.
Services are a fundamental part of Angular development and are commonly used for:

Data Sharing: Services can manage shared data between components. For example, a service might fetch data
from a server and share it with different components in your application.

Code Reusability: Services promote code reusability by encapsulating common functionality that multiple components can
use. This helps in keeping your codebase DRY (Don't Repeat Yourself).
Dependency Injection (DI): Angular's dependency injection system allows you to inject services into components,
directives, and other services. This makes your code more modular, easier to test, and reduces tight coupling between
different parts of your application.

Business Logic: Services are a good place to put your application's business logic, such as calculations, data
manipulation, and other non-UI related tasks.

API Integration: Services are commonly used to integrate with APIs, making HTTP requests and handling responses. This
keeps your components focused on the UI and keeps the API logic separate.

________________________________________________________________________________________________________________________

We can inject services in our components utilizing the providers: [providerName], then, on the constructor we can create
an istance of that provider class inside of every new object, it can be useful but it can also be very costly for our
application

One other way we can do this injection, is by making the service class as injectable, this is done by something like
on, the service class you utilize something like

@Injectable({
  providedIn: 'root'
})

this would allow us to inject the service inside any component in our app without creating a new instance for each and
every new component.

