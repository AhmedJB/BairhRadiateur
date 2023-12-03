
import { createTRPCRouter} from "../trpc";
import { getUsers,getAppProducts,importProduct,showProductWithInfo, deleteImportedProduct,modifyProducts, addMark,addTube, getOrders } from "../procedures/AdminProcedures";

export const AdminRouter = createTRPCRouter({
    getUsers,
    getAppProducts,
    importProduct,
    showProductWithInfo,
    deleteImportedProduct,
    modifyProducts,
    addMark,
    addTube,
    getOrders
  });
