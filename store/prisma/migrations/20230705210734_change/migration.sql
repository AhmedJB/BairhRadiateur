/*
  Warnings:

  - You are about to drop the `TestTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TestTest";

-- CreateTable
CREATE TABLE "auth_group" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "auth_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_group_permissions" (
    "id" BIGSERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "auth_group_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_permission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content_type_id" INTEGER NOT NULL,
    "codename" VARCHAR(100) NOT NULL,

    CONSTRAINT "auth_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_client" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "controller_client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_customuser" (
    "id" BIGSERIAL NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "last_login" TIMESTAMPTZ(6),
    "is_superuser" BOOLEAN NOT NULL,
    "username" VARCHAR(150) NOT NULL,
    "first_name" VARCHAR(150) NOT NULL,
    "last_name" VARCHAR(150) NOT NULL,
    "is_staff" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "date_joined" TIMESTAMPTZ(6) NOT NULL,
    "email" VARCHAR(254),

    CONSTRAINT "controller_customuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_customuser_groups" (
    "id" BIGSERIAL NOT NULL,
    "customuser_id" BIGINT NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "controller_customuser_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_customuser_user_permissions" (
    "id" BIGSERIAL NOT NULL,
    "customuser_id" BIGINT NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "controller_customuser_user_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_echeance" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "paid" DOUBLE PRECISION NOT NULL,
    "reste" DOUBLE PRECISION NOT NULL,
    "dateEcheance" TIMESTAMPTZ(6) NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "controller_echeance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_invoices" (
    "id" BIGSERIAL NOT NULL,
    "f_id" VARCHAR(255) NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "controller_invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_mvtstock" (
    "id" BIGSERIAL NOT NULL,
    "mvt_type" VARCHAR(255) NOT NULL,
    "qt_sortie" INTEGER NOT NULL,
    "qt_entree" INTEGER NOT NULL,
    "old_quantity" INTEGER NOT NULL,
    "new_quantity" INTEGER NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "product_id" BIGINT NOT NULL,

    CONSTRAINT "controller_mvtstock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_optioncategories" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    CONSTRAINT "controller_optioncategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_options" (
    "id" BIGSERIAL NOT NULL,
    "metal" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "product_id" BIGINT NOT NULL,

    CONSTRAINT "controller_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_order" (
    "id" BIGSERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "client_id" BIGINT NOT NULL,
    "o_id" VARCHAR(255) NOT NULL,
    "paid" DOUBLE PRECISION NOT NULL,
    "mode" INTEGER NOT NULL,
    "transport" VARCHAR(255) NOT NULL,

    CONSTRAINT "controller_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_orderdetails" (
    "id" BIGSERIAL NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "order_id" BIGINT NOT NULL,
    "prix_achat" DOUBLE PRECISION NOT NULL,
    "product_id" INTEGER NOT NULL,
    "provider_id" INTEGER NOT NULL,

    CONSTRAINT "controller_orderdetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_product" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "ptype" VARCHAR(255) NOT NULL,
    "price_vente" DOUBLE PRECISION NOT NULL,
    "price_achat" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "provider_id" BIGINT NOT NULL,
    "p_id" VARCHAR(255) NOT NULL,
    "paid" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "controller_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controller_provider" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "controller_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_admin_log" (
    "id" SERIAL NOT NULL,
    "action_time" TIMESTAMPTZ(6) NOT NULL,
    "object_id" TEXT,
    "object_repr" VARCHAR(200) NOT NULL,
    "action_flag" SMALLINT NOT NULL,
    "change_message" TEXT NOT NULL,
    "content_type_id" INTEGER,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "django_admin_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_content_type" (
    "id" SERIAL NOT NULL,
    "app_label" VARCHAR(100) NOT NULL,
    "model" VARCHAR(100) NOT NULL,

    CONSTRAINT "django_content_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_migrations" (
    "id" BIGSERIAL NOT NULL,
    "app" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "applied" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "django_migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "django_session" (
    "session_key" VARCHAR(40) NOT NULL,
    "session_data" TEXT NOT NULL,
    "expire_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "django_session_pkey" PRIMARY KEY ("session_key")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_group_name_key" ON "auth_group"("name");

-- CreateIndex
CREATE INDEX "auth_group_name_a6ea08ec_like" ON "auth_group"("name");

-- CreateIndex
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions"("group_id");

-- CreateIndex
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions"("group_id", "permission_id");

-- CreateIndex
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission"("content_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission"("content_type_id", "codename");

-- CreateIndex
CREATE UNIQUE INDEX "controller_customuser_username_key" ON "controller_customuser"("username");

-- CreateIndex
CREATE INDEX "controller_customuser_username_db9f1d59_like" ON "controller_customuser"("username");

-- CreateIndex
CREATE INDEX "controller_customuser_groups_customuser_id_abdd6468" ON "controller_customuser_groups"("customuser_id");

-- CreateIndex
CREATE INDEX "controller_customuser_groups_group_id_262abce9" ON "controller_customuser_groups"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "controller_customuser_gr_customuser_id_group_id_76543262_uniq" ON "controller_customuser_groups"("customuser_id", "group_id");

-- CreateIndex
CREATE INDEX "controller_customuser_user_permissions_customuser_id_1e3907bd" ON "controller_customuser_user_permissions"("customuser_id");

-- CreateIndex
CREATE INDEX "controller_customuser_user_permissions_permission_id_c3c3102f" ON "controller_customuser_user_permissions"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "controller_customuser_us_customuser_id_permission_783ee455_uniq" ON "controller_customuser_user_permissions"("customuser_id", "permission_id");

-- CreateIndex
CREATE INDEX "controller_mvtstock_product_id_9de50cd7" ON "controller_mvtstock"("product_id");

-- CreateIndex
CREATE INDEX "controller_options_product_id_ba4f58ff" ON "controller_options"("product_id");

-- CreateIndex
CREATE INDEX "controller_order_client_id_e79c8e22" ON "controller_order"("client_id");

-- CreateIndex
CREATE INDEX "controller_orderdetails_order_id_3ca825ce" ON "controller_orderdetails"("order_id");

-- CreateIndex
CREATE INDEX "controller_product_provider_id_1fe881ca" ON "controller_product"("provider_id");

-- CreateIndex
CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log"("content_type_id");

-- CreateIndex
CREATE INDEX "django_admin_log_user_id_c564eba6" ON "django_admin_log"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type"("app_label", "model");

-- CreateIndex
CREATE INDEX "django_session_expire_date_a5c62663" ON "django_session"("expire_date");

-- CreateIndex
CREATE INDEX "django_session_session_key_c0390e0f_like" ON "django_session"("session_key");

-- AddForeignKey
ALTER TABLE "auth_group_permissions" ADD CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth_group_permissions" ADD CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth_permission" ADD CONSTRAINT "auth_permission_content_type_id_2f476e4b_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "django_content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_customuser_groups" ADD CONSTRAINT "controller_customuser_groups_customuser_id_abdd6468_fk" FOREIGN KEY ("customuser_id") REFERENCES "controller_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_customuser_groups" ADD CONSTRAINT "controller_customuser_groups_group_id_262abce9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_customuser_user_permissions" ADD CONSTRAINT "controller_customuse_permission_id_c3c3102f_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_customuser_user_permissions" ADD CONSTRAINT "controller_customuser_use_customuser_id_1e3907bd_fk" FOREIGN KEY ("customuser_id") REFERENCES "controller_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_mvtstock" ADD CONSTRAINT "controller_mvtstock_product_id_9de50cd7_fk_controlle" FOREIGN KEY ("product_id") REFERENCES "controller_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_options" ADD CONSTRAINT "controller_options_product_id_ba4f58ff_fk" FOREIGN KEY ("product_id") REFERENCES "controller_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_order" ADD CONSTRAINT "controller_order_client_id_e79c8e22_fk" FOREIGN KEY ("client_id") REFERENCES "controller_client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_orderdetails" ADD CONSTRAINT "controller_orderdetails_order_id_3ca825ce_fk" FOREIGN KEY ("order_id") REFERENCES "controller_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "controller_product" ADD CONSTRAINT "controller_product_provider_id_1fe881ca_fk" FOREIGN KEY ("provider_id") REFERENCES "controller_provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "django_admin_log" ADD CONSTRAINT "django_admin_log_content_type_id_c4bce8eb_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "django_content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "django_admin_log" ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk" FOREIGN KEY ("user_id") REFERENCES "controller_customuser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
