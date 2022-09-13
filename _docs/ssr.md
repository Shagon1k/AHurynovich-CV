# Testing

**CONTENTS**:
1. [ General information ](#general-information)
2. [ SSR Workflow ](#ssr-workflow)
3 [ HTML Template processing ](#html-template-processing)

## General information
In addition to simple Client Side Rendering (which than used in Static Website Hosting), Application also supports ability to run it's own Server and handle rendering on it ([Server Side Rendering](https://www.heavy.ai/technical-glossary/server-side-rendering)).

> ***Note**: All **Server** related logic is located in [/src/server](/src/server/server.js)*


## SSR Workflow
As a part of Server request handling all unspecified directly GET requests are handled by [Application Render Middleware](/src/server//middlewares/app-render/app-render.middleware.js).
To support React Suspense and as result Lazy Loading **React's** [renderToPipeableStream](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream) method used to handle SSR.

## HTML Template processing
Before sending to Browser, HTML template is processed in scope of Application Render Middleware to manage **specific parts be populated**.
Those **parts** are:
- **Rendered Application** (***pattern:** \<!--SSR_TEMPLATE_APP--\>*)
- **Application initial Redux State** (***pattern:** \<!--SSR_TEMPLATE_APP_STATE--\>*)
- **CSP Scripts nonce** (***pattern:** SSR_TEMPLATE_SCRIPT_NONCE*) - used to validate injected stringified Application Redux State script
    > ***Note**: CSP nonce used to validate injected content (scripts, styles, etc.). More details: https://content-security-policy.com/nonce/*
