//changes we want to make
exports.up = function(knex) {
    //create table called fruits
    return knex.schema.createTable('fruits', tbl => {
        //id, ok, autoincrement, integer
        tbl.increments();

        //name: string up to 128, unique, required (not null)
        tbl.string('name', 128).unique().notNullable();

        //avgWeightOz: decimals
        tbl.decimal('avgWeightOz');
        //delicious: boolean
        tbl.boolean('delicious');
    });
};

//to revert the changes from the up function
exports.down = function(knex) {
  
};
