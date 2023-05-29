
create database if not exists db_ativ04;

use db_ativ04;

create table if not exists alunos  (
	id int not null auto_increment,
    nome varchar(30) not null,
    ra varchar(11) not null unique,
    curso varchar(50) not null,
    termo int not null, 
    constraint pk_alunos primary key(id) 
);

insert into alunos (nome, ra, curso, termo)
       values ('Junior Freire Oliva','10482110183', 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS - EAD', 5);

insert into alunos (nome, ra, curso, termo)
       values ('Mahteus','11111111111', 'DIREITO', 8);

insert into alunos (nome, ra, curso, termo)
       values ('Veruska','22222222222', 'PEDAGOGIA', 7);
       