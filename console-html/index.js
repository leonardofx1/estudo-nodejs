



(async () => {
     const serviceName  = globalThis.window ?'browserService':'consoleService' 

     const {default:Service} = await import(`./service/${serviceName}/index.js`)
     
    const serviceInstance =  new Service()
    serviceInstance.render()

     
})()