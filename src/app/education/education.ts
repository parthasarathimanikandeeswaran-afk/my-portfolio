import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
education = [
  {
    title: 'Degree',
    course: 'B.Sc Computer Science',
    IsSchool: false,
    place: 'Valluvar College of Science and Management',
    year: '2021 - 2024',
    percentage: '63.64%'
  },
  {
    title: '+2',
    place: 'Kandaswamy kander higher secondary School',
    IsSchool: true,
    year: '2020 - 2021',
    percentage: '80%'
  },
  {
    title: '10th',
    place: 'Kandaswamy kander higher secondary School',
    IsSchool: true,
    year: '2018 - 2019',
    percentage: '75%'
  }
];
}
