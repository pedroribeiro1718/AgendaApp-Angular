
# AgendaApp-Angular

A project developed using Angular 19 with modern front-end development practices. This application simulates a contact agenda, consuming a fake API powered by JSON Server.

## ✨ Technologies and Features

- [Angular 19](https://angular.io/) (`@angular/cli`)
- [JSON Server](https://github.com/typicode/json-server) (Fake API for testing)
- Component-based architecture and navigation using [Angular Router](https://angular.io/guide/router)
- API consumption with [HttpClient](https://angular.io/guide/http) (Services and Models)
- Reactive Forms ([Reactive Forms](https://angular.io/guide/reactive-forms))
- Modular organization with Lazy Loading (`admin` and `login` modules)
- Environment management with [environments](https://angular.io/guide/build#configuring-application-environments)
- [Bootstrap](https://getbootstrap.com/) styled with the [SB Admin 2](https://startbootstrap.com/theme/sb-admin-2) theme

## 🚀 Getting Started

### 1️⃣ Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

Install Angular CLI (if not already installed):

```bash
npm install -g @angular/cli
```

### 2️⃣ Install Dependencies

Clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/AgendaApp-Angular.git
cd AgendaApp-Angular
npm install
```

### 3️⃣ Configure the Fake API (JSON Server)

Install JSON Server globally (if needed):

```bash
npm install -g json-server
```

Run the fake API:

```bash
json-server db.json --port 3000
```

Make sure the `db.json` file is located in the root folder.

### 4️⃣ Run the Angular Application

Start the project:

```bash
ng serve
```

Access it at: [http://localhost:4200](http://localhost:4200)

## 🗺️ Module Structure

- `app/modules/login` → Authentication module
- `app/modules/admin` → Protected module loaded via Lazy Loading with the main features of the agenda

## 🔧 Environments

Configure the API URLs and other variables in:

```
src/environments/
```

- `environment.ts` → Development environment
- `environment.prod.ts` → Production environment

## 🎨 Theme and Layout

The project uses the [SB Admin 2](https://startbootstrap.com/theme/sb-admin-2) theme integrated with Bootstrap to provide a modern and responsive layout.

## 📚 Useful Documentation

- [Angular Documentation](https://angular.io/docs)
- [JSON Server](https://github.com/typicode/json-server)
- [Bootstrap](https://getbootstrap.com/)
- [SB Admin 2](https://startbootstrap.com/theme/sb-admin-2)
