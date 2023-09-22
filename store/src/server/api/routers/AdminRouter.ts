
import { createTRPCRouter} from "../trpc";
import { getUsers,getAppProducts,importProduct,showProductWithInfo, deleteImportedProduct,modifyProducts } from "../procedures/AdminProcedures";

export const AdminRouter = createTRPCRouter({
    getUsers,
    getAppProducts,
    importProduct,
    showProductWithInfo,
    deleteImportedProduct,
    modifyProducts
  });
