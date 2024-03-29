import os
import sqlite3
from typing import List
from pydantic import BaseModel, parse_obj_as, validator, EmailStr
import pandas as pd


class ContactModel(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str

    def prep_dict(self):
        return self.dict(exclude_none=True)


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


def clean_users(users: List[ContactModel]) -> List[ContactModel]:
    clean_users=[]
    for user in users:
        if user.email is not None:
            clean_users.append(user)

    return clean_users

if "__main__" == __name__:

    db = os.getenv("db")
    users = get_users(db)
    users = clean_users(users=users)
    print(users)
