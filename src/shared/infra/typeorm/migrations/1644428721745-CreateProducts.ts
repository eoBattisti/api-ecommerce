import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey    
} from "typeorm";

export class CreateProducts1644428721745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "produtos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "nome",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "preco",
                    type: "float",
                    precision: 10,
                    scale: 2,
                    isNullable: false
                },
                {
                    name: "quantidade",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "categoriaId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));

        await queryRunner.createForeignKey("produtos", new TableForeignKey({
            columnNames: ["categoriaId"],
            referencedColumnNames: ["id"],
            referencedTableName: "categorias",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
