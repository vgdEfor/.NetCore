FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["es.efor.PryBase.MainGateway/*.csproj", "es.efor.PryBase.MainGateway/"]

RUN dotnet restore "es.efor.PryBase.MainGateway/es.efor.PryBase.MainGateway.csproj"
COPY . .
WORKDIR "/src/es.efor.PryBase.MainGateway"
RUN dotnet build "es.efor.PryBase.MainGateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "es.efor.PryBase.MainGateway.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "es.efor.PryBase.MainGateway.dll"]
