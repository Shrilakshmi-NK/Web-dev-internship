drop table if exists `employees`;

create table `employees` (
  `employeeNumber` int(11) not null,
  `lastName` varchar(50) not null,
  `firstName` varchar(50) not null,
  `departmentCode` varchar(10) not null,
  `jobTitle` varchar(50) not null,
  `salary` int(0) not null,
  primary key (`employeeNumber`),
  key `departmentCode` (`departmentCode`),
  constraint `employees_ibfk_2` foreign key (`departmentCode`) references `departments` (`departmentCode`)
);

drop table if exists `departments`;

create table `departments`(
  `departmentCode` varchar(10) not null,
  `city` varchar(50) not null,
  `departmentName` varchar(50) not null,
   primary key (`departmentCode`)
);

drop table if exists `interviews`;

create table `interviews`(
  `departmentCode`varchar(10) not null,
  -- `department` varchar(50) not null,
  `role` varchar(50) not null,
  `status` varchar(50) not null,
   constraint `interviews_ibfk_2` foreign key (`departmentCode`) references `departments` (`departmentCode`)
);

DROP TABLE IF EXISTS `interviews`;
CREATE TABLE `interviews` (
    `departmentCode` varchar(10) NOT NULL,
    `role` varchar(50) NOT NULL,
    `status` varchar(50) NOT NULL,
    CONSTRAINT `interviews_ibfk_2` FOREIGN KEY (`departmentCode`) REFERENCES `departments` (`departmentCode`)
);