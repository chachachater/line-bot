import twint

# Configure
c = twint.Config()
c.Username = "hyxpk"
# c.Search = "This one is a bit better but not at the standard"
c.Limit = 0
c.Media = True
c.Images = True
c.Custom["tweet"] = ["created_at", "username", "name", "tweet", "thumbnail"]
c.Output = "divaTweets.txt"
c.Store_json = True
# Run
twint.run.Search(c)
