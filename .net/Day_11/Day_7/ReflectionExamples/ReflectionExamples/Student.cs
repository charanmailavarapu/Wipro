using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExamples
{
    internal class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }

        public double Cgpa { get; set; }

        public Student()
        {

        }

        public Student( int studentId, string studentName, double cgpa)
        {
            StudentId = studentId;
            StudentName = studentName;
            Cgpa = cgpa;
        }

        public override string ToString()
        {
            return "Student Id is: " + StudentId + "Student Name is: " + StudentName + "Cgpa: " + Cgpa;
        }

        public void ShowStudent()
        {
            Console.WriteLine("Under Construction..");
        }

        public void SearchStudent(int sid)
        {
            Console.WriteLine("Search Student " + sid);
        }

        public void DeleteStudent(int sid)
        {
            Console.WriteLine("Delete Student: " + sid);
        }

        public void AddStudent(Student student)
        {
            Console.WriteLine("Please add Student..");
        }
    }
}
