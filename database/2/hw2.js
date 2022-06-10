// # 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName)<6;
// # 2.Вибрати львівські відділення банку.
    select * from department where DepartmentCity='lviv';
// # 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
    select * from client where Education='high' order by LastName;
// # 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
    select * from application order by idApplication desc limit 5;
// # 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
    select * from client where LastName like '%ov' or LastName like '%ova';
// # 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
    select * from client
join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='kyiv';
// # 7.Знайти унікальні імена клієнтів.
    select distinct FirstName from client;
// # 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
    select * from client
join application a on client.idClient = a.Client_idClient
where Sum>5000;
// # 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
    select count(*) as b, DepartmentCity from client
join department d on d.idDepartment = client.Department_idDepartment
group by DepartmentCity ;

select * from client
join department d on d.idDepartment = client.Department_idDepartment;

select count(*) as b, DepartmentCity from client
join department d on d.idDepartment = client.Department_idDepartment where DepartmentCity='lviv';
// # 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
    select max(Sum) as max,Client_idClient from client
join application a on client.idClient = a.Client_idClient
group by Client_idClient order by Client_idClient ;

// # 11. Визначити кількість заявок на крдеит для кожного клієнта.
    select count(*) as zay, Client_idClient from client
join application a on client.idClient = a.Client_idClient
group by Client_idClient order by Client_idClient;
#
// # 12. Визначити найбільший та найменший кредити.
    select max(Sum) a from application
union
select min(sum) from application;
// # 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
    select count(*) as credity, Education from client
join application a on client.idClient = a.Client_idClient
where Education='high';

select * from client
join application a on client.idClient = a.Client_idClient;
// # 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
    select avg(Sum) as avg, FirstName from client
join application a on client.idClient = a.Client_idClient
group by FirstName order by avg desc limit 1;
#
// # 15. Вивести відділення, яке видало в кредити найбільше грошей
select max(Sum) as count, idDepartment from client
join application a on client.idClient = a.Client_idClient
join department d on d.idDepartment = client.Department_idDepartment
group by idDepartment;

select * from client
join department d on d.idDepartment = client.Department_idDepartment
join application a on client.idClient = a.Client_idClient;
// # 16. Вивести відділення, яке видало найбільший кредит.
    select *  from client
join application a on client.idClient = a.Client_idClient
join department d on d.idDepartment = client.Department_idDepartment
order by Sum desc limit 1;

// # 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
    select * from client
join application a on client.idClient = a.Client_idClient
where Sum=3700 and Currency='gryvnia' or Education='high';
// # 18. Усіх клієнтів київських відділень пересилити до Києва.
    update client
join department d on d.idDepartment = client.Department_idDepartment
join application a on client.idClient = a.Client_idClient
set City='Kyiv' where DepartmentCity='Kyiv';
select * from client;
// # 19. Видалити усі кредити, які є повернені.
    delete from application where CreditState='Returned';
// # 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
    select * from client
join application a on client.idClient = a.Client_idClient
where FirstName like '_a%';
!!!!!!!!!
// # 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select * from client
join department d on d.idDepartment = client.Department_idDepartment
join application a on client.idClient = a.Client_idClient
where DepartmentCity='lviv';

select sum(Sum) as suma,DepartmentCity from client
join application a on client.idClient = a.Client_idClient
join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity='lviv' group by idDepartment;
!!!!!!!!!!
// # 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select * from client
join application a on client.idClient = a.Client_idClient
where CreditState='Returned' and Sum>5000;
// # 23.Знайти максимальний неповернений кредит.
    select max(Sum) from application where
CreditState='Not returned';
// # 24.Знайти клієнта, сума кредиту якого найменша
select min(Sum) from client
join application a on client.idClient = a.Client_idClient;

// # 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select * from application where sum> (select avg(Sum) from application);  !!!!!!!!!!!!!
    select avg(Sum) from application;
// # 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів

select count(*) as cou,City from client
join application a on client.idClient = a.Client_idClient
group by a.Client_idClient order by cou desc limit 1;
select * from client where City='Krasne';!!!!
// # 27. Місто клієнта з найбільшою кількістю кредитів
select count(*) as cou,City from client
join application a on client.idClient = a.Client_idClient
group by a.Client_idClient order by cou desc limit 1;