#!/usr/bin/env python3
"""Module containing an asynchronous generator that yields random numbers."""
import asyncio
import random


async def async_generator():
    """Asynchronous generator that loops 10 times, each time asynchronously
    waits 1 second, then yields a random float between 0 and 10.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
