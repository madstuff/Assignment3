// Service to log and store employee data.
export class LoggingService {
  // Store employee data.
  names = [{firstName: 'Madhav'}, {firstName: 'Tarun'}, {firstName: 'Deepa'}, {firstName: 'Kounj'} ];

  // Log whenever an employee is added.
  logAddEmployee(name: string) {
    console.log('Newly entered name: ' + name);
  }

}
