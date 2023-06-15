const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")

const PROTO_PATH = "./jadwal.proto"

const options =
{
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
const itemProto = grpc.loadPackageDefinition(packageDefinition)

const ItemService = itemProto.ItemService

const client = new ItemService(
    '127.0.0.1:5000', 
    grpc.credentials.createInsecure()
)

module.exports = client