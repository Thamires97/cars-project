import { Request, Response } from "express";
import { CreateCourseService } from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const createCourseService = new CreateCourseService();
  createCourseService.execute({
    name: "Node.js",
    duration: 10,
    educator: "John Doe",
  });
}
