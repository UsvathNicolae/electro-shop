import { Model } from "sequelize";
import {AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table} from 'sequelize-typescript';

export interface  UserI{
    id?: number | null,
    username: string,
    password: string
}

@Table(
    {
        tableName: "user",
        timestamps: true
    }
)
export default class User extends Model implements UserI{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    username!: string;
}
