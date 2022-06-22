import sqlite3
from typing import Any, List
from pydantic import BaseModel, parse_obj_as, validator
import pandas as pd
import json


class ContactModel(BaseModel):
    id: Any
    name: Any
    email: Any
    message: Any

    @validator("email")
    @classmethod
    def valid_email(cls, email):
        if "@" in email and email.endswith(".com"):
            return email
        else:
            return ""


def get_users(db) -> List[ContactModel]:
    conn = sqlite3.connect(db)
    curs = conn.cursor()
    data = curs.execute(
        """
        SELECT * FROM contact_info
        """
    )
    data = data.fetchall()
    df = pd.DataFrame(data)
    df.columns = ["id", "name", "email", "message"]
    m = df.to_dict(orient="records")
    user_model = parse_obj_as(List[ContactModel], m)

    return user_model


if "__main__" == __name__:

    db = "db/Contact.db"
    users = get_users(db)
    print(users)
