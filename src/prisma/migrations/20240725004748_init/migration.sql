-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_technologies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "studied" BOOLEAN NOT NULL DEFAULT false,
    "deadline" DATETIME,
    "createadAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUser" TEXT NOT NULL,
    CONSTRAINT "technologies_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_technologies" ("createadAt", "deadline", "id", "idUser", "studied", "title") SELECT "createadAt", "deadline", "id", "idUser", "studied", "title" FROM "technologies";
DROP TABLE "technologies";
ALTER TABLE "new_technologies" RENAME TO "technologies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
