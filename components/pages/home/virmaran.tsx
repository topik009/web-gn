"use client"
import * as React from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function VirmaranModal({ open, onOpenChange }: Props) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>¿Hablamos?</AlertDialogTitle>
                <AlertDialogDescription>
                    Déjanos tus datos y te contactamos.
                </AlertDialogDescription>
                </AlertDialogHeader>

                    <h1>VIRMARAN</h1>

                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Aceptar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}