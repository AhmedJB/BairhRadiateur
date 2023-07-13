/*
  Warnings:

  - You are about to drop the `auth_group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_group_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_customuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_customuser_groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_customuser_user_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_echeance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_mvtstock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_optioncategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_orderdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controller_provider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `django_admin_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `django_content_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `django_migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `django_session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "auth_group_permissions" DROP CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm";

-- DropForeignKey
ALTER TABLE "auth_group_permissions" DROP CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id";

-- DropForeignKey
ALTER TABLE "auth_permission" DROP CONSTRAINT "auth_permission_content_type_id_2f476e4b_fk_django_co";

-- DropForeignKey
ALTER TABLE "controller_customuser_groups" DROP CONSTRAINT "controller_customuser_groups_customuser_id_abdd6468_fk";

-- DropForeignKey
ALTER TABLE "controller_customuser_groups" DROP CONSTRAINT "controller_customuser_groups_group_id_262abce9_fk_auth_group_id";

-- DropForeignKey
ALTER TABLE "controller_customuser_user_permissions" DROP CONSTRAINT "controller_customuse_permission_id_c3c3102f_fk_auth_perm";

-- DropForeignKey
ALTER TABLE "controller_customuser_user_permissions" DROP CONSTRAINT "controller_customuser_use_customuser_id_1e3907bd_fk";

-- DropForeignKey
ALTER TABLE "controller_mvtstock" DROP CONSTRAINT "controller_mvtstock_product_id_9de50cd7_fk_controlle";

-- DropForeignKey
ALTER TABLE "controller_options" DROP CONSTRAINT "controller_options_product_id_ba4f58ff_fk";

-- DropForeignKey
ALTER TABLE "controller_order" DROP CONSTRAINT "controller_order_client_id_e79c8e22_fk";

-- DropForeignKey
ALTER TABLE "controller_orderdetails" DROP CONSTRAINT "controller_orderdetails_order_id_3ca825ce_fk";

-- DropForeignKey
ALTER TABLE "controller_product" DROP CONSTRAINT "controller_product_provider_id_1fe881ca_fk";

-- DropForeignKey
ALTER TABLE "django_admin_log" DROP CONSTRAINT "django_admin_log_content_type_id_c4bce8eb_fk_django_co";

-- DropForeignKey
ALTER TABLE "django_admin_log" DROP CONSTRAINT "django_admin_log_user_id_c564eba6_fk";

-- DropTable
DROP TABLE "auth_group";

-- DropTable
DROP TABLE "auth_group_permissions";

-- DropTable
DROP TABLE "auth_permission";

-- DropTable
DROP TABLE "controller_client";

-- DropTable
DROP TABLE "controller_customuser";

-- DropTable
DROP TABLE "controller_customuser_groups";

-- DropTable
DROP TABLE "controller_customuser_user_permissions";

-- DropTable
DROP TABLE "controller_echeance";

-- DropTable
DROP TABLE "controller_invoices";

-- DropTable
DROP TABLE "controller_mvtstock";

-- DropTable
DROP TABLE "controller_optioncategories";

-- DropTable
DROP TABLE "controller_options";

-- DropTable
DROP TABLE "controller_order";

-- DropTable
DROP TABLE "controller_orderdetails";

-- DropTable
DROP TABLE "controller_product";

-- DropTable
DROP TABLE "controller_provider";

-- DropTable
DROP TABLE "django_admin_log";

-- DropTable
DROP TABLE "django_content_type";

-- DropTable
DROP TABLE "django_migrations";

-- DropTable
DROP TABLE "django_session";

-- CreateTable
CREATE TABLE "TestTest" (
    "id" TEXT NOT NULL,

    CONSTRAINT "TestTest_pkey" PRIMARY KEY ("id")
);
