import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";



export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try { 
      // Validar el body, params, y query de la solicitud
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      
      next(); // Continúa al siguiente middleware/controlador
    } catch (error) {
      // Manejo de errores de validación de Zod
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          }))
        );
      }

      // Manejo de otros errores inesperados
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };