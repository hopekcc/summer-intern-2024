import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


def classroom_create_coursework(course_id):
  """
  Creates the coursework the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member

  try:
    service = build("classroom", "v1", credentials=creds)
    coursework = {
        "title": "",

        "materials": [
            {"link": {"url": ""}},
            {"link": {"url": ""}},
        ],
        "workType": "ASSIGNMENT",
        "state": "PUBLISHED",
    }
    coursework = (
        service.courses()
        .courseWork()
        .create(courseId=course_id, body=coursework)
        .execute()
    )
    print(f"Assignment created with ID {coursework.get('id')}")
    return coursework

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error


if __name__ == "__main__":
  # Put the course_id of course whose coursework needs to be created,
  # the user has access to.
  classroom_create_coursework(453686957652)