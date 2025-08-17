using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Assignment_2;


namespace Assignment_2
{
    internal class Program1
    {
        static Library library;

        public Program1()
        {
            library = new Library();
        }
        public static Borrower RegisterBorrower()
        {

            Console.WriteLine("Enter Borrower Name: ");
            string Name = Console.ReadLine();
            Console.WriteLine("Enter library card number: ");
            string LibraryCardNumber = Console.ReadLine();
            Borrower brw = new Borrower(Name, LibraryCardNumber);
            return brw;
        }
        public static Book CreateBook()
        {

            Console.WriteLine("Enter book title: ");
            string Title = Console.ReadLine();
            Console.WriteLine("Enter Author name: ");
            string Author = Console.ReadLine();
            Console.WriteLine("Enter ISBN: ");
            string ISBN = Console.ReadLine();
            Book book = new Book(Title, Author, ISBN);
            return book;
        }
        static void Main(string[] args)
        {
            int choice;
            Library library = new Library();
            do
            {
                Console.WriteLine("Select a number: ");
                Console.WriteLine("1. Add a Book");
                Console.WriteLine("2. Register a Boroower");
                Console.WriteLine("3. Borrow a Book");
                Console.WriteLine("4. Return a book");
                Console.WriteLine("5. View Books and Borrowers");

                choice = int.Parse(Console.ReadLine());
                string ISBN;
                string LibraryCardNumber;
                switch (choice)
                {
                    case 1:
                        library.AddBook(CreateBook());
                        break;
                    case 2:
                        library.RegisterBorrower(RegisterBorrower());
                        break;
                    case 3:
                        Console.WriteLine("Enter book isbn number to borrow");
                        ISBN = Console.ReadLine();
                        Console.WriteLine("Enter library card number: ");
                        LibraryCardNumber = Console.ReadLine();
                        library.BorrowBook(ISBN, LibraryCardNumber);
                        break;
                    case 4:
                        Console.WriteLine("Enter book isbn number to borrow");
                        ISBN = Console.ReadLine();
                        Console.WriteLine("Enter library card number: ");
                        LibraryCardNumber = Console.ReadLine();
                        library.ReturnBook(ISBN, LibraryCardNumber);
                        break;
                    case 5:
                        library.ViewBorrowers();
                        library.ViewBooks();
                        break;
                    default:
                        break;

                }
            } while (choice > 5);


        }

    }
}

