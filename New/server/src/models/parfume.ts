import { Sequelize, Model, DataTypes } from 'sequelize';

// These are all the attributes in the Parfume model
interface ParfumeAttributes {
  id?: number;
  name: string;
  perfumeName: string;
  description: string;
  url: string;
  noteUrl: string;
  heartNoteUrl: string;
  baseNoteUrl: string;
}

// Now we can use the same interface for ParfumeCreationAttributes
type ParfumeCreationAttributes = ParfumeAttributes;

// Extend from Model<ParfumeAttributes, ParfumeCreationAttributes>
export class Parfume extends Model<ParfumeAttributes, ParfumeCreationAttributes> {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public perfumeName!: string;
  public description!: string;
  public url!: string;
  public noteUrl!: string;
  public heartNoteUrl!: string;
  public baseNoteUrl!: string;

}

export function ParfumeFactory(sequelize: Sequelize): typeof Parfume {
  Parfume.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED, // Assuming the ID is an unsigned integer
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      perfumeName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      noteUrl: {
        type: DataTypes.STRING,
      },
      heartNoteUrl: {
        type: DataTypes.STRING,
      },
      baseNoteUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "parfumelist",
      sequelize, // passing the `sequelize` instance is required
    }
  );

  return Parfume;
}
