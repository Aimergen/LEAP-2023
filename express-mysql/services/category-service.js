import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imageAddress) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imageAddress) VALUES (?,?,?)`,
    [name, slug, imageAddress]
  );
  return result;
};

export const updateCategories = async (name, slug, imageAddress, id) => {
  const [result] = await pool.query(
    `UPDATE category set name='${name}',slug='${slug}',imageAddress='${imageAddress}' where id=${id}`
  );
  return result;
};

export const deleteCategories = async (id) => {
  const [result] = await pool.query(`delete from category where id=${id}`);
  return result;
};

export const sortCategories = async (id) => {
  const [result] = await pool.query(`SELECT * FROM category where id=${id}`);
  return result;
};
