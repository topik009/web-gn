"use client"

import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {Card,CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import { BorderBeam } from "@/components/magicui/border-beam";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type DialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}
type ContactoFormProps = DialogProps & React.ComponentProps<"div">

const formSchema = z.object({
  email: z.string().email("Correo electrónico no válido"),
  servicio: z.enum(["oxi" , "seguridad" , "politica" , "civil" , "tic" , "otros"], {
    required_error: "Elige una opción",
  }),
  celular: z.string().regex(/^9\d{8}$/, "Celular inválido."),
  nombres: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "El nombre solo debe contener letras y espacios."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactoForm({
  open,
  onOpenChange,
  className,
  ...props
}: ContactoFormProps) {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl">Contáctonos</AlertDialogTitle>
          <AlertDialogDescription className="md:text-lg">
            Déjanos tus datos necesarios, por favor.
          </AlertDialogDescription>
        </AlertDialogHeader>
          <div className={cn("flex flex-col gap-6 mt-5 mb-5", className)} {...props}>
            <Card className="relative overflow-hidden">
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">

                    <div className="grid gap-3">
                      <Label htmlFor="nombres">Nombres y Apellidos</Label>
                      <Input
                        id="nombres"
                        placeholder="Alvaro Navarro Saldaña"
                        {...register("nombres")}
                      />
                      {errors.nombres && (
                        <p className="text-red-500 text-xs">{errors.nombres.message}</p>
                      )}
                    </div>

                    <div className="grid gap-3 grid-cols-12">

                      <div className="col-span-12 md:col-span-8 grid gap-3">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          placeholder="an@gruponavarro.com.pe"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="col-span-12 md:col-span-4 grid gap-3">
                        <Label htmlFor="celular">Celular</Label>
                        <Input
                          id="text"
                          placeholder="936218330"
                          {...register("celular")}
                        />
                        {errors.celular && (
                          <p className="text-red-500 text-xs">{errors.celular.message}</p>
                        )}
                      </div>

                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="servicio">Elige un servicio</Label>
                      <Select
                        onValueChange={(value) =>
                          setValue("servicio", value as "oxi" | "seguridad" | "politica" | "civil" | "tic" | "otros")
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oxi">Obras por Impuestos</SelectItem>
                          <SelectItem value="gestion">Gestión Pública Regional y Municipal</SelectItem>
                          <SelectItem value="bim">Metodilogía BIM</SelectItem>
                          <SelectItem value="expedientes">Consultoría y elaboración de Expedientes Técnicos</SelectItem>
                          <SelectItem value="proyectos">Consultoría en Gestión de Proyectos</SelectItem>
                          <SelectItem value="saneamiento">Saneamiento Físico Legal de Predios Rústicos y Urbanos</SelectItem>
                          <SelectItem value="tic">Tecnologías de la Información y la Comunicación</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.servicio && (
                        <p className="text-red-500 text-xs">{errors.servicio.message}</p>
                      )}
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message-2">Mensaje</Label>
                      <Textarea placeholder="Escribe aquí tu mensaje." id="message-2" />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button type="submit" className="w-full">
                        Enviar
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
                <BorderBeam
                  duration={6}
                  size={400}
                  className="from-transparent via-orange-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={400}
                  className="from-transparent via-blue-500 to-transparent"
                />
            </Card>
          </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cerrar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}