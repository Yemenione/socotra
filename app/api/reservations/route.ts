import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(reservations);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, date, time, guests, email, phone } = body;

        const newReservation = await prisma.reservation.create({
            data: {
                name,
                date: new Date(date),
                time,
                guests: parseInt(guests),
                email: email || "N/A", // Fallback if not provided
                phone: phone || "N/A"  // Fallback if not provided
            }
        });

        return NextResponse.json(newReservation);
    } catch (error) {
        console.error("Reservation POST error", error);
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, status } = body;

        const updated = await prisma.reservation.update({
            where: { id },
            data: { status }
        });

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update reservation' }, { status: 500 });
    }
}
