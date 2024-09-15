use VitalScan;

-- Table for Usuario
CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Edad INT NOT NULL,
    Puesto VARCHAR(100),
    Ciudad VARCHAR(50),
    Correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE
);

-- Table for Video
CREATE TABLE Video (
    idVideo INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    Ojeras BOOLEAN,
    Pupilas_dilatadas BOOLEAN,
    Ojos_rojos BOOLEAN,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE
);

-- Table for Computar
-- Table for Computar
CREATE TABLE Computar (
    idComp INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    Numero_respiraciones_por_minuto INT,
    Numero_latidos_por_minuto INT,
    Horas_ejercicio_semanal INT,
    Promedio_horas_sueno FLOAT,
    Nivel_estres INT,
    Peso FLOAT,
    Altura FLOAT,
    IMC FLOAT GENERATED ALWAYS AS (Peso / (Altura * Altura)) VIRTUAL, -- Correct syntax for MySQL
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE
);


SELECT * from Usuario

-- Procedures

INSERT INTO Usuario (Nombre, Apellido, Edad, Puesto, Ciudad, Correo, password, isAdmin)
VALUES ('Juan', 'Perez', 28, 'Ingeniero de Software', 'Monterrey', 'juan.perez@example.com', 'password123', FALSE);

