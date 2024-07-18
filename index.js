//step1)import json-server(using require keyword)

const jsonServer=require('json-server')

//step2)create json server(using create method)

const mediaPlayerServer= jsonServer.create()

//step3)create path for the json file(namuda data fileor data store cheyuvn udasikuna file na set cheyuvn paryunnu),router method aani use cheyunna set cheyvn.
const router= jsonServer.router("db.json")

//step4)create middleware(request response cycle na control cheyuvn pattuna oru function) to parse json
const middleware=jsonServer.defaults()

//step5)allow server to use router and middleware(middleware koduthatta router store cheyuvn padathollu)
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//step6)set up port for the server to run(istam ulla port kodukam like 3000)
PORT=3000 ||process.env.PORT

//step7)listen to the request

mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})