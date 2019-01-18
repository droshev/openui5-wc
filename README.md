# openui5-basic-template-app

[OpenUI5](https://github.com/SAP/openui5) basic template app using the [UI5 Build and Development Tooling](https://github.com/SAP/ui5-tooling). You can use it as a starting point to build custom OpenUI5 apps.

## Prerequisites

The **UI5 build and development tooling command line interface (UI5 CLI)** has to be installed.
For installation instructions please see [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).
https://github.com/SAP/ui5-cli#cli-usage

```
npm install --global @ui5/cli
```

## Setup

1. Clone the repository and navigate into it
    ```sh
    git clone https://github.com/SAP/openui5-basic-template-app.git
    cd openui5-basic-template-app
    ```
1. Install all dependencies

    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)

    ```sh
    ui5 serve -o /index.html
    ```

1. new run:

```
ui5 build --all
ui5 build self-contained --all
cd dist
serve
```
