-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_mode" TEXT,
    "logo_id" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL,
    "status" TEXT DEFAULT E'draft',
    "company" TEXT,
    "role" TEXT NOT NULL DEFAULT E'',
    "seniority" TEXT NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "originalUrl" TEXT NOT NULL DEFAULT E'',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobOffer_mainSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_JobOffer_secondarySkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "JobOffer_company_idx" ON "JobOffer"("company");

-- CreateIndex
CREATE UNIQUE INDEX "_JobOffer_mainSkills_AB_unique" ON "_JobOffer_mainSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_JobOffer_mainSkills_B_index" ON "_JobOffer_mainSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobOffer_secondarySkills_AB_unique" ON "_JobOffer_secondarySkills"("A", "B");

-- CreateIndex
CREATE INDEX "_JobOffer_secondarySkills_B_index" ON "_JobOffer_secondarySkills"("B");

-- AddForeignKey
ALTER TABLE "JobOffer" ADD CONSTRAINT "JobOffer_company_fkey" FOREIGN KEY ("company") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobOffer_mainSkills" ADD FOREIGN KEY ("A") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobOffer_mainSkills" ADD FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobOffer_secondarySkills" ADD FOREIGN KEY ("A") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobOffer_secondarySkills" ADD FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
