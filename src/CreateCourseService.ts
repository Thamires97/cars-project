interface Course {
  name: string;
  duration: number;
  educator: string;
}

export class CreateCourseService {
  execute({ name, duration, educator }: Course) {
    console.log(name, duration, educator);
  }
}
