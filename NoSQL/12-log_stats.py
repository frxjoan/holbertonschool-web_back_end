#!/usr/bin/env python3
""" 12-log_stats """
from pymongo import MongoClient


def log_stats(mongo_collection):
    """returns the number of documents in a collection"""
    log = {}
    log["topics"] = mongo_collection.count_documents({"topics": {"$exists": True}})
    log["no_topics"] = mongo_collection.count_documents({"topics": {"$exists": False}})
    return log
