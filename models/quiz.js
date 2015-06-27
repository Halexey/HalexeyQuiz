module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quiz',
		{ pregunta: DataTypes.STRING,
		  validate: { noEmpty:{msg: "-> Falta Pregunta"}}
		},
		respuesta: {
			typeDataTypes.STRING,
			validate: { noEmpty: {msg: "-> Falta Respuesta"}}
		}		
	}
  );
}