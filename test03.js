/**
 * * API Specifications
 */

/**
 * * Retrieve employees api
 * @queryParams [page, limit]
 */
const url = '/api/v1/employees?page=1&limit=10';
const method = 'GET';
const header = {'Content-Type': 'application/json'};
const response = [
    {
        id: 'Long',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        imageUrl: 'String'
    }
    ...
];

/**
 * * Retrieve employee detail api
 * @queryParams [id]
 */
const url = '/api/v1/employee-detail?id=12343';
const method = 'GET';
const header = {'Content-Type': 'application/json'};
const response = {
        id: 'Long',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        imageUrl: 'String',
        dateOfBirth: 'String',
        aboutMe: 'String'
};


/**
 * * React Application
 */

/**
 * * Things to consider for this application
 * ! Use of pagination to handle large sum of data
 * ! Can use react hooks for state management as this is a small application
 */

// Folder structure
Project
 |
 +-- config
 |  |  
 |  +-- webpack
 |      -- webpack.dev.babel.js
 |      -- webpack.prod.babel.js
 |  +-- mock
 |      -- mockMiddleware.js
 |      -- mocks.js
 |  -- index.js
 +-- src
 |  |  
 |  +-- components
 |      +-- blocks
 |          -- employee.card.block.js
 |          -- back.link.block.js
 |      +-- patterns
 |          -- employee.pattern.js
 |          -- employee.detail.pattern.js
 |          -- error.pattern.js 
 |      +-- pages
 |          -- employee.page.js
 |          -- employee.detail.page.js
 |          -- error.page.js
 |  +-- contexts
 |      -- employee.context.js
 |      -- employee.types.js
 |      -- employee.reducer.js 
 |      -- employee.action.js 
 |      -- employee.service.js  
 |  +-- constants
 |      -- index.js
 |  +-- routes
 |      -- root.js
 |      -- routes.js   
 |  +-- utils
 |      -- index.js
 |  -- index.html
 |  -- index.js  
 |    
 |-- .npmrc
 |-- .prettierrc
 |-- .babelrc
 |-- json-server.json
 |-- package.json
 |-- webpack.config.js
 |-- README.md   
